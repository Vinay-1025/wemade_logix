import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { addInternFromSocket } from '../redux/slices/internSlice';

const useSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.on('newRegistration', (data) => {
      console.log('New registration received via socket:', data);
      dispatch(addInternFromSocket(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);
};

export default useSocket;
