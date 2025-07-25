// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from './client';
import type {
  PostManualProcessFileAsyncData,
  PostManualProcessFileAsyncResponses,
  PostManualSearchFileData,
  PostManualSearchFileResponses,
  GetManualSystemStatusData,
  GetManualSystemStatusResponses,
  GetManualHealthData,
  GetManualHealthResponses,
  GetManualConfigData,
  GetManualConfigResponses,
  PostManualConfigData,
  PostManualConfigResponses,
  PostManualConfigErrors,
  GetManualDataSourcesData,
  GetManualDataSourcesResponses,
  GetManualDataSourcesErrors,
  PostManualIngestionStatusData,
  PostManualIngestionStatusResponses,
  PostManualDeleteDataSourceData,
  PostManualDeleteDataSourceResponses,
  PostManualDeleteDataSourcesByNameData,
  PostManualDeleteDataSourcesByNameResponses,
  GetManualActiveDataSourcesData,
  GetManualActiveDataSourcesResponses,
  PostManualMarkDataSourcesAsActiveData,
  PostManualMarkDataSourcesAsActiveResponses,
  PostManualMarkDataSourcesAsInactiveData,
  PostManualMarkDataSourcesAsInactiveResponses,
  PostManualProcessUrlAsyncData,
  PostManualProcessUrlAsyncResponses,
  PostManualProcessUrlAsyncErrors,
} from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<
  TData extends TDataShape = TDataShape,
  ThrowOnError extends boolean = boolean,
> = ClientOptions<TData, ThrowOnError> & {
  /**
   * You can provide a client instance returned by `createClient()` instead of
   * individual options. This might be also useful if you want to implement a
   * custom client.
   */
  client?: Client;
  /**
   * You can pass arbitrary values through the `meta` object. This can be
   * used to access values that aren't defined as part of the SDK function.
   */
  meta?: Record<string, unknown>;
};

/**
 * Process a file for embedding asynchronously
 * Starts processing a file to generate embeddings in the background and returns immediately. Use the ingestion_status endpoint to check progress.
 */
export const postManualProcessFileAsync = <ThrowOnError extends boolean = false>(
  options: Options<PostManualProcessFileAsyncData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualProcessFileAsyncResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/process_file_async',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

/**
 * Search files using semantic search
 * Performs semantic search across processed files using embeddings
 */
export const postManualSearchFile = <ThrowOnError extends boolean = false>(
  options: Options<PostManualSearchFileData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualSearchFileResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/search_file',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

/**
 * Get system statistics
 * Returns system health and statistics about the vector database. This endpoint always returns a 200 status.
 */
export const getManualSystemStatus = <ThrowOnError extends boolean = false>(
  options?: Options<GetManualSystemStatusData, ThrowOnError>
) => {
  return (options?.client ?? _heyApiClient).get<
    GetManualSystemStatusResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/system_status',
    ...options,
  });
};

/**
 * Health check
 * Returns the health status of the service
 */
export const getManualHealth = <ThrowOnError extends boolean = false>(
  options?: Options<GetManualHealthData, ThrowOnError>
) => {
  return (options?.client ?? _heyApiClient).get<GetManualHealthResponses, unknown, ThrowOnError>({
    url: '/manual/health',
    ...options,
  });
};

/**
 * Get configuration
 * Returns all current configuration settings with their values, types, and frozen status.
 *
 * Available configurations include:
 * - **Editable configurations:**
 * - INGESTION_PROCESS_MAX_FILE_PATHS: Maximum number of file paths processed in a single ingestion batch
 * - CHUNK_CHARACTER_LIMIT: Character limit for text chunks during ingestion
 * - SEARCH_CHUNK_CHARACTER_LIMIT: Character limit for chunks returned in search results
 * - SEARCH_CHUNKS_LIMIT: Maximum number of chunks to process during search
 * - SEARCH_PROCESSING_TIMEOUT_SECONDS: Timeout for search processing operations
 * - SEARCH_CONTEXT_EXTENSION_CHARACTERS: Additional characters to include for context extension
 * - SEARCH_RESULT_LIMIT: Maximum number of search results to return
 *
 * - **Frozen (read-only) configurations:**
 * - AUDIO_TRANSCRIPTION_DIR: Directory for storing audio transcriptions
 * - AUDIO_TRANSCRIPTION_IDLE_TIMEOUT: Idle timeout for audio transcription threads
 * - DOWNLOAD_THREAD_IDLE_TIMEOUT: Idle timeout for download threads
 * - EMBEDDER_IDLE_TIMEOUT: Idle timeout for embedder threads
 * - TEMP_AUDIO_DIR: Temporary directory for audio processing
 * - VECTORIZER_MODEL_PATH: Path to the vectorizer model
 * - EMBEDDING_SIZE: Size of embeddings
 * - SQLITE_DB_LOCATION: Location of SQLite database
 * - BULK_QUEUE_FULL_SLEEP_TIME: Sleep time when bulk queue is full
 * - BULK_QUEUE_FULL_RETRY_COUNT: Retry count for bulk queue operations
 * - INSTRUCTIONS: MCP server instructions
 * - WHISPER_MODEL_SIZE: Size of Whisper model for audio transcription
 * - PARAKEET_MODEL_PATH: Path to Parakeet model
 * - PARAKEET_CHUNK_DURATION: Duration of chunks for Parakeet processing
 * - PARAKEET_OVERLAP_DURATION: Overlap duration for Parakeet chunks
 *
 */
export const getManualConfig = <ThrowOnError extends boolean = false>(
  options?: Options<GetManualConfigData, ThrowOnError>
) => {
  return (options?.client ?? _heyApiClient).get<GetManualConfigResponses, unknown, ThrowOnError>({
    url: '/manual/config',
    ...options,
  });
};

/**
 * Set configuration
 * Updates an editable configuration setting. Frozen configurations cannot be modified.
 */
export const postManualConfig = <ThrowOnError extends boolean = false>(
  options: Options<PostManualConfigData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualConfigResponses,
    PostManualConfigErrors,
    ThrowOnError
  >({
    url: '/manual/config',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

/**
 * Get available data sources
 * Returns a list of all available data sources, optionally filtered by source name or specific source path
 */
export const getManualDataSources = <ThrowOnError extends boolean = false>(
  options?: Options<GetManualDataSourcesData, ThrowOnError>
) => {
  return (options?.client ?? _heyApiClient).get<
    GetManualDataSourcesResponses,
    GetManualDataSourcesErrors,
    ThrowOnError
  >({
    url: '/manual/data_sources',
    ...options,
  });
};

/**
 * Get ingestion status for a data source
 * Returns the current ingestion status and progress for a specific data source
 */
export const postManualIngestionStatus = <ThrowOnError extends boolean = false>(
  options: Options<PostManualIngestionStatusData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualIngestionStatusResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/ingestion_status',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

/**
 * Delete a data source
 * Deletes a data source and all its associated embeddings from the vector database
 */
export const postManualDeleteDataSource = <ThrowOnError extends boolean = false>(
  options: Options<PostManualDeleteDataSourceData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualDeleteDataSourceResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/delete_data_source',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

/**
 * Delete data sources by name
 * Deletes all data sources that share the given source name and their associated embeddings from the vector database
 */
export const postManualDeleteDataSourcesByName = <ThrowOnError extends boolean = false>(
  options: Options<PostManualDeleteDataSourcesByNameData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualDeleteDataSourcesByNameResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/delete_data_sources_by_name',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

/**
 * Get active data sources
 * Returns a list of currently active data sources that are being used for search operations
 */
export const getManualActiveDataSources = <ThrowOnError extends boolean = false>(
  options?: Options<GetManualActiveDataSourcesData, ThrowOnError>
) => {
  return (options?.client ?? _heyApiClient).get<
    GetManualActiveDataSourcesResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/active_data_sources',
    ...options,
  });
};

/**
 * Mark data sources as active
 * Marks the specified data sources as active, making them available for search operations
 */
export const postManualMarkDataSourcesAsActive = <ThrowOnError extends boolean = false>(
  options: Options<PostManualMarkDataSourcesAsActiveData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualMarkDataSourcesAsActiveResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/mark_data_sources_as_active',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

/**
 * Mark data sources as inactive
 * Marks the specified data sources as inactive, removing them from search operations
 */
export const postManualMarkDataSourcesAsInactive = <ThrowOnError extends boolean = false>(
  options: Options<PostManualMarkDataSourcesAsInactiveData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualMarkDataSourcesAsInactiveResponses,
    unknown,
    ThrowOnError
  >({
    url: '/manual/mark_data_sources_as_inactive',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

/**
 * Process a URL asynchronously
 * Adds a URL to the download queue for processing. Currently supports YouTube URLs which will be downloaded, transcribed, and indexed.
 */
export const postManualProcessUrlAsync = <ThrowOnError extends boolean = false>(
  options: Options<PostManualProcessUrlAsyncData, ThrowOnError>
) => {
  return (options.client ?? _heyApiClient).post<
    PostManualProcessUrlAsyncResponses,
    PostManualProcessUrlAsyncErrors,
    ThrowOnError
  >({
    url: '/manual/process_url_async',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};
