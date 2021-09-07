import { FC } from 'react';
import { BiMoon } from 'react-icons/bi';
import { IoMdSunny } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeThemeAction } from '../../store/theme';
import { Button } from '../Button';

const ThemeChanger: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  const handleThemeChange = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    dispatch(changeThemeAction(newTheme));
  };

  return (
    <Button
      color={theme === 'light' ? 'gray' : 'black'}
      textColor={theme === 'light' ? 'black' : 'white'}
      onClick={handleThemeChange}
      style={{ height: '4rem' }}
    >
      {theme === 'light' ? <IoMdSunny /> : <BiMoon />}
    </Button>
  );
};

export default ThemeChanger;
