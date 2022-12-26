import { AppDispatch, RootState } from 'src/store/store';
import {
  AnyAction,
  AsyncThunkOptions,
  AsyncThunkPayloadCreatorReturnValue,
  createAsyncThunk,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { FallbackIfUnknown } from '@reduxjs/toolkit/dist/tsHelpers';
import { i18n } from 'i18next';
import { IUser } from 'src/modules/IUser';

interface AppThunkApiConfig {
  rejectValue: string | IUser;
  state: RootState;
  dispatch: AppDispatch;
  extra: i18n;
}

type GetState<ThunkApiConfig> = ThunkApiConfig extends {
  state: infer State;
}
  ? State
  : unknown;
type GetExtra<ThunkApiConfig> = ThunkApiConfig extends {
  extra: i18n;
}
  ? i18n
  : unknown;
type GetDispatch<ThunkApiConfig> = ThunkApiConfig extends {
  dispatch: infer Dispatch;
}
  ? FallbackIfUnknown<
      Dispatch,
      ThunkDispatch<
        GetState<ThunkApiConfig>,
        GetExtra<ThunkApiConfig>,
        AnyAction
      >
    >
  : ThunkDispatch<
      GetState<ThunkApiConfig>,
      GetExtra<ThunkApiConfig>,
      AnyAction
    >;

type GetRejectValue<ThunkApiConfig> = ThunkApiConfig extends {
  rejectValue: infer RejectValue;
}
  ? RejectValue
  : unknown;
type GetFulfilledMeta<ThunkApiConfig> = ThunkApiConfig extends {
  fulfilledMeta: infer FulfilledMeta;
}
  ? FulfilledMeta
  : unknown;
type GetRejectedMeta<ThunkApiConfig> = ThunkApiConfig extends {
  rejectedMeta: infer RejectedMeta;
}
  ? RejectedMeta
  : unknown;

type GetThunkAPI<ThunkApiConfig> = BaseThunkAPI<
  GetState<ThunkApiConfig>,
  GetExtra<ThunkApiConfig>,
  GetDispatch<ThunkApiConfig>,
  GetRejectValue<ThunkApiConfig>,
  GetRejectedMeta<ThunkApiConfig>,
  GetFulfilledMeta<ThunkApiConfig>
>;

export const createAppAsyncThunk = <Returned, ThunkArgument>(
  typePrefix: string,
  callback: (
    argument: ThunkArgument,
    thunkAPI: GetThunkAPI<AppThunkApiConfig>
  ) => AsyncThunkPayloadCreatorReturnValue<
    Promise<Returned>,
    AppThunkApiConfig
  >,
  options?: AsyncThunkOptions<ThunkArgument, AppThunkApiConfig>
) =>
  createAsyncThunk<Returned, ThunkArgument, AppThunkApiConfig>(
    typePrefix,
    async (_, thunkAPI) => {
      try {
        return await callback(_, thunkAPI);
      } catch (error) {
        return thunkAPI.rejectWithValue(error as string);
      }
    },
    options
  );
