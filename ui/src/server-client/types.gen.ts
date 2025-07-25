// This file is auto-generated by @hey-api/openapi-ts

export type ProcessFileAsyncResponse = {
  status: 'success';
};

export type IngestUrlResponse = {
  status: 'success';
  /**
   * Confirmation message
   */
  message: string;
};

export type SearchResponse = {
  status: 'success';
  /**
   * The search query that was executed
   */
  query: string;
  /**
   * Number of results returned
   */
  results_count: number;
  /**
   * Search execution time in seconds as formatted string
   */
  search_time_seconds: string;
  /**
   * Array of search results
   */
  results: Array<SearchResult>;
};

export type SearchResult = {
  /**
   * The matching text content from the document
   */
  text: string;
  /**
   * Source file path where the text was found
   */
  source: string;
  /**
   * Distance between the query and the text
   */
  distance: number;
};

export type DataSourceFile = {
  /**
   * Name of the data source (typically the file name)
   */
  source_name?: string;
  /**
   * Path to the source file
   */
  source_path: string;
  /**
   * Current ingestion status
   */
  status: 'not_found' | 'processing' | 'completed' | 'failed';
  /**
   * Number of vectors generated from this file
   */
  vector_count: number;
  /**
   * Dimension of the vectors
   */
  dimension: number;
};

export type SystemStatsResponse = {
  status: 'success';
  /**
   * Current system health status
   */
  system_health: string;
};

export type ConfigResponse = {
  status: 'ok';
  /**
   * All configuration settings with their values, types, and frozen status
   */
  data: {
    [key: string]: ConfigItem;
  };
};

export type ConfigUpdateResponse = {
  status: 'ok';
  /**
   * Updated configuration setting
   */
  data: {
    [key: string]: ConfigItem;
  };
};

export type ConfigItem = {
  /**
   * The configuration value (can be any type)
   */
  value:
    | string
    | number
    | number
    | boolean
    | Array<unknown>
    | {
        [key: string]: unknown;
      };
  /**
   * The Python type name of the value
   */
  type: string;
  /**
   * Whether this configuration is frozen (read-only)
   */
  frozen: boolean;
};

export type DataSourcesResponse = {
  status: 'success';
  /**
   * Total number of data source files
   */
  total_files: number;
  /**
   * Total number of vectors across all files
   */
  total_vectors: number;
  /**
   * List of data source files with their metadata
   */
  files: Array<DataSourceFile>;
};

export type ErrorResponse = {
  status: 'error';
  /**
   * Error message describing what went wrong
   */
  error: string;
};

export type IngestionStatusResponse = {
  status: 'success';
  /**
   * Current ingestion status
   */
  ingestion_status: 'not_found' | 'processing' | 'completed' | 'failed';
  /**
   * Optional message, present for not_found and failed states
   */
  message?: string;
  /**
   * Progress information, only present when ingestion_status is "processing"
   */
  progress?: {
    /**
     * The ID of the data source being processed
     */
    data_source_id?: string;
    /**
     * Progress information for each ingestion phase
     */
    phase_progresses?: Array<{
      /**
       * The name of the ingestion phase
       */
      phase:
        | 'initialization'
        | 'downloading'
        | 'transcription'
        | 'embedding'
        | 'storing'
        | 'completed';
      /**
       * Whether this is the currently active phase
       */
      is_current_phase: boolean;
      /**
       * Progress percentage for this phase (0-100), null if total is unknown
       */
      percentage: number;
    }>;
  };
};

export type DeleteDataSourceResponse = {
  status: 'success';
  /**
   * Success or failure message
   */
  message: string;
  /**
   * Whether the data source was found and deleted
   */
  data_source_was_found: boolean;
};

export type DeleteDataSourcesByNameResponse = {
  status: 'success';
  /**
   * Success or failure message
   */
  message: string;
  /**
   * Whether any matching data sources were found and deleted
   */
  data_sources_were_found: boolean;
};

export type ActiveDataSourcesResponse = {
  status: 'ok';
  /**
   * List of currently active data source paths
   */
  active_data_sources: Array<string>;
};

export type PostManualProcessFileAsyncData = {
  body: {
    /**
     * Path to the file or directory to process
     */
    file_path: string;
    /**
     * Optional custom name for the data source. If not provided, the file path will be used as the source name.
     */
    source_name?: string;
  };
  path?: never;
  query?: never;
  url: '/manual/process_file_async';
};

export type PostManualProcessFileAsyncResponses = {
  /**
   * File processing started successfully
   */
  201: ProcessFileAsyncResponse;
};

export type PostManualProcessFileAsyncResponse =
  PostManualProcessFileAsyncResponses[keyof PostManualProcessFileAsyncResponses];

export type PostManualSearchFileData = {
  body: {
    /**
     * Search query text
     */
    query: string;
    /**
     * Offset for pagination
     */
    offset?: number;
  };
  path?: never;
  query?: never;
  url: '/manual/search_file';
};

export type PostManualSearchFileResponses = {
  /**
   * Search results or an error if the query is invalid.
   */
  200: SearchResponse | ErrorResponse;
};

export type PostManualSearchFileResponse =
  PostManualSearchFileResponses[keyof PostManualSearchFileResponses];

export type GetManualSystemStatusData = {
  body?: never;
  path?: never;
  query?: never;
  url: '/manual/system_status';
};

export type GetManualSystemStatusResponses = {
  /**
   * System statistics
   */
  200: SystemStatsResponse;
};

export type GetManualSystemStatusResponse =
  GetManualSystemStatusResponses[keyof GetManualSystemStatusResponses];

export type GetManualHealthData = {
  body?: never;
  path?: never;
  query?: never;
  url: '/manual/health';
};

export type GetManualHealthResponses = {
  /**
   * Health check response
   */
  200: {
    status: 'ok';
  };
};

export type GetManualHealthResponse = GetManualHealthResponses[keyof GetManualHealthResponses];

export type GetManualConfigData = {
  body?: never;
  path?: never;
  query?: never;
  url: '/manual/config';
};

export type GetManualConfigResponses = {
  /**
   * Current configuration
   */
  200: ConfigResponse;
};

export type GetManualConfigResponse = GetManualConfigResponses[keyof GetManualConfigResponses];

export type PostManualConfigData = {
  body: {
    /**
     * Name of the configuration setting to update
     */
    config_name:
      | 'INGESTION_PROCESS_MAX_FILE_PATHS'
      | 'CHUNK_CHARACTER_LIMIT'
      | 'SEARCH_CHUNK_CHARACTER_LIMIT'
      | 'SEARCH_CHUNKS_LIMIT'
      | 'SEARCH_PROCESSING_TIMEOUT_SECONDS'
      | 'SEARCH_CONTEXT_EXTENSION_CHARACTERS'
      | 'SEARCH_RESULT_LIMIT';
    /**
     * Value for the configuration setting. Type depends on the config_name.
     */
    config_value:
      | string
      | number
      | number
      | boolean
      | Array<unknown>
      | {
          [key: string]: unknown;
        };
  };
  path?: never;
  query?: never;
  url: '/manual/config';
};

export type PostManualConfigErrors = {
  /**
   * Invalid config name or value
   */
  400: ErrorResponse;
};

export type PostManualConfigError = PostManualConfigErrors[keyof PostManualConfigErrors];

export type PostManualConfigResponses = {
  /**
   * Configuration updated successfully
   */
  200: ConfigUpdateResponse;
};

export type PostManualConfigResponse = PostManualConfigResponses[keyof PostManualConfigResponses];

export type GetManualDataSourcesData = {
  body?: never;
  path?: never;
  query?: {
    /**
     * Optional source name to filter data sources by name
     */
    source_name?: string;
    /**
     * Optional source path to get stats for a specific data source
     */
    source?: string;
  };
  url: '/manual/data_sources';
};

export type GetManualDataSourcesErrors = {
  /**
   * Bad request when both source_name and source parameters are provided together
   */
  400: ErrorResponse;
  /**
   * Internal server error, e.g., if the data source map is not initialized.
   */
  500: ErrorResponse;
};

export type GetManualDataSourcesError =
  GetManualDataSourcesErrors[keyof GetManualDataSourcesErrors];

export type GetManualDataSourcesResponses = {
  /**
   * Successful response with a list of data sources.
   */
  200: DataSourcesResponse;
};

export type GetManualDataSourcesResponse =
  GetManualDataSourcesResponses[keyof GetManualDataSourcesResponses];

export type PostManualIngestionStatusData = {
  body: {
    /**
     * The data source (file path or URL) to check ingestion status for
     */
    source: string;
  };
  path?: never;
  query?: never;
  url: '/manual/ingestion_status';
};

export type PostManualIngestionStatusResponses = {
  /**
   * Ingestion status information
   */
  200: IngestionStatusResponse;
};

export type PostManualIngestionStatusResponse =
  PostManualIngestionStatusResponses[keyof PostManualIngestionStatusResponses];

export type PostManualDeleteDataSourceData = {
  body: {
    /**
     * The data source (file path) to delete
     */
    source: string;
  };
  path?: never;
  query?: never;
  url: '/manual/delete_data_source';
};

export type PostManualDeleteDataSourceResponses = {
  /**
   * Delete operation result
   */
  200: DeleteDataSourceResponse;
};

export type PostManualDeleteDataSourceResponse =
  PostManualDeleteDataSourceResponses[keyof PostManualDeleteDataSourceResponses];

export type PostManualDeleteDataSourcesByNameData = {
  body: {
    /**
     * The common name of the data sources to delete
     */
    source_name: string;
  };
  path?: never;
  query?: never;
  url: '/manual/delete_data_sources_by_name';
};

export type PostManualDeleteDataSourcesByNameResponses = {
  /**
   * Delete operation result
   */
  200: DeleteDataSourcesByNameResponse;
};

export type PostManualDeleteDataSourcesByNameResponse =
  PostManualDeleteDataSourcesByNameResponses[keyof PostManualDeleteDataSourcesByNameResponses];

export type GetManualActiveDataSourcesData = {
  body?: never;
  path?: never;
  query?: never;
  url: '/manual/active_data_sources';
};

export type GetManualActiveDataSourcesResponses = {
  /**
   * List of active data sources
   */
  200: ActiveDataSourcesResponse;
};

export type GetManualActiveDataSourcesResponse =
  GetManualActiveDataSourcesResponses[keyof GetManualActiveDataSourcesResponses];

export type PostManualMarkDataSourcesAsActiveData = {
  body: {
    /**
     * Array of source paths to mark as active
     */
    source_paths: Array<string>;
  };
  path?: never;
  query?: never;
  url: '/manual/mark_data_sources_as_active';
};

export type PostManualMarkDataSourcesAsActiveResponses = {
  /**
   * Data sources marked as active successfully
   */
  200: ActiveDataSourcesResponse;
};

export type PostManualMarkDataSourcesAsActiveResponse =
  PostManualMarkDataSourcesAsActiveResponses[keyof PostManualMarkDataSourcesAsActiveResponses];

export type PostManualMarkDataSourcesAsInactiveData = {
  body: {
    /**
     * Array of source paths to mark as inactive
     */
    source_paths: Array<string>;
  };
  path?: never;
  query?: never;
  url: '/manual/mark_data_sources_as_inactive';
};

export type PostManualMarkDataSourcesAsInactiveResponses = {
  /**
   * Data sources marked as inactive successfully
   */
  200: ActiveDataSourcesResponse;
};

export type PostManualMarkDataSourcesAsInactiveResponse =
  PostManualMarkDataSourcesAsInactiveResponses[keyof PostManualMarkDataSourcesAsInactiveResponses];

export type PostManualProcessUrlAsyncData = {
  body: {
    /**
     * The URL to ingest (currently supports YouTube URLs)
     */
    url: string;
    /**
     * Optional source name to associate with the data source
     */
    source_name?: string;
  };
  path?: never;
  query?: never;
  url: '/manual/process_url_async';
};

export type PostManualProcessUrlAsyncErrors = {
  /**
   * Bad request when URL is missing or invalid
   */
  400: ErrorResponse;
};

export type PostManualProcessUrlAsyncError =
  PostManualProcessUrlAsyncErrors[keyof PostManualProcessUrlAsyncErrors];

export type PostManualProcessUrlAsyncResponses = {
  /**
   * URL successfully added to download queue
   */
  201: IngestUrlResponse;
};

export type PostManualProcessUrlAsyncResponse =
  PostManualProcessUrlAsyncResponses[keyof PostManualProcessUrlAsyncResponses];

export type ClientOptions = {
  baseUrl: 'http://localhost:8000' | (string & {});
};
