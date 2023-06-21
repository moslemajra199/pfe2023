import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store'
import Loader from '../shared/Loader'
import Message from '../shared/Message'
import {Row, Col , Card} from "react-bootstrap"


const ProductsDetailsScreen = () => {
  return (
    <div>ProductsDetailsScreen</div>
  )
}

export default ProductsDetailsScreen