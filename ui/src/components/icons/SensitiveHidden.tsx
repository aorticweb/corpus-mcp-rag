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

export default function SensitiveHidden({ className = '' }) {
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
        d="M19.731 5.182a1 1 0 1 0-1.462-1.364l-2.71 2.903C14.471 6.287 13.271 6 12 6 9.608 6 7.469 7.018 5.849 8.114a18.644 18.644 0 0 0-3.333 2.916 1.45 1.45 0 0 0 0 1.94 18.644 18.644 0 0 0 3.333 2.916c.231.157.473.312.725.462l-2.305 2.47a1 1 0 0 0 1.462 1.364l2.71-2.903C9.529 17.713 10.729 18 12 18c2.392 0 4.531-1.018 6.151-2.114a18.644 18.644 0 0 0 3.333-2.916 1.45 1.45 0 0 0 0-1.94 18.644 18.644 0 0 0-3.333-2.916 15.453 15.453 0 0 0-.725-.462l2.305-2.47ZM14.07 8.317A7.21 7.21 0 0 0 12 8c-1.833 0-3.58.789-5.03 1.77A16.633 16.633 0 0 0 4.343 12c.55.575 1.467 1.445 2.627 2.23.32.217.657.425 1.005.617l6.094-6.53Zm-4.138 7.366 6.094-6.53c.348.192.684.4 1.006.617A16.631 16.631 0 0 1 19.657 12a16.633 16.633 0 0 1-2.627 2.23C15.58 15.21 13.834 16 12 16c-.707 0-1.4-.117-2.07-.317Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
