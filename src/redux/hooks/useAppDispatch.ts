import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../types';

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch;