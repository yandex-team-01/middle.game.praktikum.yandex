import { useMountEffectProd } from 'src/hooks/useMountEffectProd';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { getEnvSsrAndProd } from 'src/utils/getEnvSsrAndProd';

const env = getEnvSsrAndProd();

export const useMountEffect = env.isPROD
  ? useMountEffectProd
  : useMountEffectOneCall;
