/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Config as ConfigTypes} from '@jest/types';

export {
  SearchSource,
  createTestScheduler,
  getVersion,
  runCLI,
  Jest,
  createJest,
} from '@jest/core';

export {run} from 'jest-cli';

export type Config = ConfigTypes.InitialOptions;
