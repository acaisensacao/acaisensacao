import styled from 'styled-components';

export const Container = styled.div`

    position:absolute;
    z-index:8;
    width: 100vw;
    display: flex;
    align-items: start;
    flex-direction:column;
    height:100vh;
    z-index:10;
  

    /* box-shadow: 0.08em 0.08em 1.5em 0.03em #a4a4a4;*/
    
    .menu{
    width: 100vw;
    height: 9vh;
    background-color:#ffd427;
    padding-left: 2.5vw;
    padding-right: 2vw;
    height:auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    position:static;
   
   
    }

    img
    {
    width: 135px;
    height: 65px;
    cursor: pointer;
    
   
    }

  

    .div-list{
    width: auto ;
    width: 45vw;
    
    }

    .div-list button{
    width:125px;
    height:40px;
    border-radius:10px;
    background-color:#00b300;
    color:white;
    font-size:1.7em;
    animation: click 2s ease-in-out infinite;
    cursor:pointer;
    font-weight:bold;
    }

      @keyframes click{
       0%,100%{
      
      scale: 87%;
      
        }
        50%{
            
            scale:100%;
        
        }
        
        }

    ul{
    display: flex;
    align-items: center;
    flex-direction: row;
    font-weight:500;
    justify-content: space-around;
}
    

    
    
  

.item-menu{
    font-size:2.2em;
    text-decoration:none;
    color: #6b1b6f;

    }

     .item-menu:hover{
    color:#fff;
    }


    .divlogo
    {
    display: flex;
    align-items: center;
    width: 50vw;
    justify-content: start;

    }

    




   

    .mobile-menu
    {
    display: none;
    cursor: pointer;
    font-size: 4.5em;
    color:rgb(107, 27, 111);
    margin-right: 5vw;
    }

    .mobile-menu:hover{
    color:#fff;
    }

    .mobile-menu:active{
    color:#fff;
    }


    @media (max-width:600px){
    
    .item-menu{
    display:none;
    }

     .mobile-menu
    {
    display: flex;
    margin-right:60px;
    }

    .div-list button{
    display:none;
    }




    }

       .navbar {
    display:none;
 
    }

 
 
    
`;

