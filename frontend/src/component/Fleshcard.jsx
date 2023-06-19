import {  useEffect, useReducer, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Box,
  VStack,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,

} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import axios from 'axios';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
const initialstate={
    title:"",
    description:"",
    term:"",
    definition:"",
}
const reducer=(state=initialstate,action)=>{
 switch(action.type){
    case "title":{
        return {
            ...state,
            title:action.payload
        }
    }
    case "description":{
        return {
            ...state,
            description:action.payload
        }
    }
    case "term":{
        return {
            ...state,
            term:action.payload
        }
    }
    case "definition":{
        return {
            ...state,
            definition:action.payload
        }
    }
    default:{
        return initialstate
    }
 }
}

export default function Fleshcard() {

 const [data,setdata]=useState([])
const [state,dispatch]=useReducer(reducer,initialstate)
  const {title,description,term,definition}=state
  const headers={
 "Authorization":`Bearer ${localStorage.getItem("token")}`,
 "Content-Type":"application/json"
  }
  useEffect(()=>{
    axios.get("https://actual-shoes-api.onrender.com/flesh/",{headers}).then((res)=>{

        setdata(res.data.data)
        
    })
    .catch((err)=>{
        console.log(err)
    })
  },[data])
  // delete part here 
const handleupdate=(id)=>{

}

const handledelete=(id)=>{
   axios.delete(`https://actual-shoes-api.onrender.com/flesh/delete/${id}`,{headers})
   .then((res)=>{
    console.log(res)
   }).catch((err)=>{
    console.log(err)
   })
}

  return (
    <>
    <Navbar2 />
    <Box
    mt={"3"}
   
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container
        maxW={"2xl"}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
         Create Your Flesh Card Here !😎
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          ///form submit part her #########
          onSubmit={(e) => {
            e.preventDefault();
           console.log(state)
           axios.post("https://actual-shoes-api.onrender.com/flesh/create",state,{headers})
           .then((res)=>{
            console.log(res)
           }).catch((err)=>{
            console.log(err.message)
           })
          }}>
          <FormControl>
            <VStack spacing={"2"}>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              name={'title'}
              type={'text'}
              required
              placeholder={'Title'}
              aria-label={'Your Email'}
              value={title}
            //   disabled={state !== 'initial'}
              onChange={(e)=>dispatch({type:"title",payload:e.target.value})}
            />

<Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              name={'description'}
              type={'text'}
              required
              placeholder={'description'}
              aria-label={'Your Email'}
              value={description}
             
              onChange={(e)=>dispatch({type:"description",payload:e.target.value})}
            />
             <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              name={'term'}
              type={'text'}
              required
              placeholder={'term'}
              aria-label={'Your Email'}
              value={term}
             
              onChange={(e)=>dispatch({type:"term",payload:e.target.value})}
            />
             <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              name={'definition'}
              type={'text'}
              required
              placeholder={'definition'}
              aria-label={'Your Email'}
              value={definition}
            
              onChange={(e)=>dispatch({type:"definition",payload:e.target.value})}
            />
            </VStack>
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'blue'}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}>
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          >
          
        </Text>
      </Container>
      <hr />
    
        {/* ##### Card Part Here ####### */}
        <Box mt={"10"} mb={3} m={"auto"} w={"50%"}  >
  {data.length >0 && data ? data.map((el)=><Card mt={"5"} mb="5" >
    <CardHeader>
      <Heading size='md'>Title-:{el.title}</Heading>
    </CardHeader>
    <CardBody>
      <Text>description:-{el.description}</Text>
      <Text>term:-{el.term}</Text>
      <Text>definition:-{el.definition}</Text>
    </CardBody>
    
    <CardFooter>
        <HStack>
      <Button  colorScheme='teal' variant='outline' onClick={()=>handleupdate(el._id)}><AiFillEdit  /></Button>
      <Button   textAlign={"center"} colorScheme='teal' variant='outline' onClick={()=>handledelete(el._id)}><AiFillDelete /></Button>
      </HStack>
    </CardFooter>
  </Card>) :"helo"}
  
</Box>
      </Box>

    <Footer />
    </>
  );
}