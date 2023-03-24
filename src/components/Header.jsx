import {React,useState} from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/car.Slice';
import {useSelector} from 'react-redux'
import {AiFillCloseCircle} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
 const [BurgerNavStatus ,setBurgerNavStatus]= useState(false);
 const cars = useSelector(selectCars);
 

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="logo"  />
      </a>
      <Menu>
        {
          cars.map((car,index)=>{
            return <a key={index} href="#">{car}</a>
          })
        }
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CostomeMenu onClick={()=> setBurgerNavStatus(true)} />
      </RightMenu>
      <BurgerNav show={BurgerNavStatus}>
        <CostomeWrapper>
          <CustomClose onClick={()=> setBurgerNavStatus(false)} />
        </CostomeWrapper>
        {cars.map((car,index)=>{
              return<li key={index}><a href="#">{car}</a></li>
            })
        }
        <li><a href="#">Extra Inventory</a></li>
        <li><a href="#">Inventery</a></li>
        <li><a href="#">Inventery</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
display:flex;
align-items:center;
padding:0 20px;
position:fixed;
justify-content:space-between;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
@media(max-width:786px){
  display:none;
}
a{
  font-weight:600;
  padding:0 10px;
  text-transform:uppercase;
}
`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  margin-left:10px;
  text-transform:uppercase;
} 
// `
const CostomeMenu = styled(AiOutlineMenu)`
  cursor:pointer;
`
const BurgerNav = styled.div`
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
transition:transform 0.2s ;
position:fixed;
 list-style:none;
 top:0;
 bottom:0;
right:0;
width:300px;
background-color:white;
display:flex;
flex-direction:column;
z-index:16;
padding:20px;
text-align:start;

li{
  padding:15px 0;
  border-bottom: 1px solid rgba( 0 , 0 , 0 , 0.2)
}
a{
  font-weight:600;
}
`

const CustomClose = styled(AiFillCloseCircle)`

cursor:pointer;
`
const CostomeWrapper= styled.div`
display:flex;
justify-content:flex-end;
`;