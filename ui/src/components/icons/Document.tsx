/*
 * Copyright 2025 Block, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default function Document({ className = '' }) {
  return (
    <svg
      width="1.5rem"
      height="1.5rem"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.546 4.503a6.26 6.26 0 0 0-.264-.003H6.6c-.297 0-.459 0-.575.01l-.014.001v.014C6 4.64 6 4.804 6 5.1v13.8c0 .297 0 .459.01.575l.001.014h.014c.116.01.278.011.575.011h10.8c.297 0 .459 0 .575-.01l.014-.001v-.014c.01-.116.011-.278.011-.575V8.608c0-.12 0-.18-.002-.224v-.003l-.002-.002a6.215 6.215 0 0 0-.147-.17l-3.12-3.508a6.24 6.24 0 0 0-.177-.195l-.002-.003h-.004Zm-.21-2.003c.206 0 .464-.001.716.064a2 2 0 0 1 .613.275c.216.145.387.339.523.492l.037.042 3.118 3.508.032.035c.116.13.263.295.372.49.094.17.164.352.206.542.048.218.047.438.047.613v10.371c0 .252 0 .498-.017.706a2.022 2.022 0 0 1-.201.77 2 2 0 0 1-.874.874 2.022 2.022 0 0 1-.77.201 9.144 9.144 0 0 1-.706.017H6.568c-.252 0-.498 0-.706-.017a2.022 2.022 0 0 1-.77-.2 2 2 0 0 1-.874-.875 2.021 2.021 0 0 1-.201-.77C4 19.43 4 19.184 4 18.932V5.068c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 0 1 .874-.874c.271-.138.541-.182.77-.201.208-.017.454-.017.706-.017h7.769ZM8 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-6a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H9Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
