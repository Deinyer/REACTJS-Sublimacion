import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return(
        <>
        <IconButton  aria-label="cart"  >
              <StyledBadge className="carrito" badgeContent={2} color="secondary">
                <ShoppingCartIcon sx={{ fontSize: 40 }}/>
              </StyledBadge>
            </IconButton>
        </>
    )

}


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 6,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      
    },
  }));

  export default CartWidget;