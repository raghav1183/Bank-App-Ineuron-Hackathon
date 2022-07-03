// import React from "react";


// import {
//   Text,
//   Link,
//   HStack,
//   Center,
//   Heading,
//   Switch,
//   useColorMode,
//   NativeBaseProvider,
//   extendTheme,
//   VStack,
//   Box,
//   Button,
// } from "native-base";



// import { Platform } from "react-native";

import HomePage from "./components/HomePage";
// import CreditCard from "./components/CreditCard";

// // Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

// // extend the theme
// export const theme = extendTheme({ config });

// export default function App() {


//   let card={
//     bankName:"SBI",
//     height:{
//        value:300,
//        unit:""
//     }
//   }

//   return (
//     <NativeBaseProvider theme={theme}>
//       <HomePage/>

//      <CreditCard card={card}/>
//       </NativeBaseProvider>
        
//   );

// }


import React from "react";
import FundTransfer from "./components/FundTransfer";
import { NativeBaseProvider, Box, Text, Stack } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserLogin from "./components/UserLogin";
import CreditCard from "./components/Pieces/CreditCard";
import BankAccountLinkPage from "./components/BankAccountLinkPage";
import GenerateCards from "./components/GenerateCards";

// import CreditCard from "./components/CreditCard";

export default function App() {

  let card={
        bankName:"SBI",
        height:{
           value:300,
           unit:"%"
        }
      }
      let txn={
        txnId:"1",
        txnTime:"1",
       txnAmount:"1",
        txnStatus:"1",
        approved:true
      }

     
      const Stack = createNativeStackNavigator();

  return(
    <NativeBaseProvider>
      {/* <HomePage userName="John"></HomePage> */}
      {/* <UserLogin></UserLogin> */}
{/* <ModalAuthenticate >

</ModalAuthenticate> */}
      
      {/* <TransactionApproved txn={txn}></TransactionApproved> */}

      {/* <CurrencyText currency={{cents:100,symbol:"₹"}}></CurrencyText> */}


     {/* <BankAccountLinkPage accounts={accounts}></BankAccountLinkPage>       */}

     {/* <CreditCard></CreditCard> */}
     {/* <UserLogin></UserLogin> */}


       
     <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Login" component={UserLogin} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="BankTerms" component={BankAccountLinkPage} />
        <Stack.Screen name="FundTransfer" component={FundTransfer} />
        <Stack.Screen name="GuestPayments" component={GenerateCards} />
       
      </Stack.Navigator>
</NavigationContainer>
      
    </NativeBaseProvider> 

    
  );
}