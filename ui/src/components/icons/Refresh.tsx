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

export default function Refresh({ className = '' }) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1508 1.74076C13.7315 1.38134 13.1002 1.4299 12.7407 1.84923C12.3813 2.26855 12.4299 2.89985 12.8492 3.25927L14.2968 4.50004H11.5001C6.8057 4.50004 3.00012 8.30564 3.00012 13.0001C3.00012 17.6945 6.80568 21.5 11.5001 21.5C16.1945 21.5 20.0001 17.6944 20.0001 13C20.0001 12.4477 19.5523 12 19.0001 12C18.4478 12 18.0001 12.4477 18.0001 13C18.0001 16.5899 15.0899 19.5 11.5001 19.5C7.91026 19.5 5.00012 16.5899 5.00012 13.0001C5.00012 9.4102 7.91027 6.50004 11.5001 6.50004H14.2967L12.8492 7.74076C12.4299 8.10018 12.3813 8.73148 12.7407 9.15081C13.1002 9.57014 13.7315 9.6187 14.1508 9.25927L17.6417 6.26706C17.8608 6.08362 18.0001 5.8081 18.0001 5.50004C18.0001 5.19294 17.8616 4.91817 17.6438 4.73474L14.1508 1.74076Z"
        fill="currentColor"
      />
    </svg>
  );
}
