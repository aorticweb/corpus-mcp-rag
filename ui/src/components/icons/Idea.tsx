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

export default function Idea({ className = '' }) {
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
        d="M12 3C7.67283 3 4.98694 7.96755 7.41702 11.7635L8.84879 14L15.1514 14L16.5831 11.7633C19.013 7.96731 16.3271 3 12 3ZM5.73261 12.8418C2.49843 7.78981 6.00376 1 12 1C17.9961 1 21.5015 7.78948 18.2676 12.8415L16.7382 15.2309C16.4351 15.7043 15.9116 16 15.339 16L8.66122 16C8.0886 16 7.56511 15.7043 7.26208 15.2309L5.73261 12.8418ZM8.00002 18C8.00002 17.4477 8.44774 17 9.00002 17H12H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H12H9.00002C8.44774 19 8.00002 18.5523 8.00002 18ZM10 20C9.44774 20 9.00003 20.4477 9.00003 21C9.00003 21.5523 9.44774 22 10 22H12H14C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20H12H10Z"
        fill="currentColor"
      />
    </svg>
  );
}
