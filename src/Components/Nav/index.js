import Button from '../Button';
import NavWrapper from './index.styles';
import { saveToImage } from '../../utils/util';

function Nav() {
  return (
    <NavWrapper>
      <Button customClass='save' onClick={() => saveToImage()}>
        Save Image
      </Button>
    </NavWrapper>
  );
}

export default Nav;
