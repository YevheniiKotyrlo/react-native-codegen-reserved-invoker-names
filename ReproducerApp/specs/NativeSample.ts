import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  readonly add: (left: number, right: number) => number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeSample');
