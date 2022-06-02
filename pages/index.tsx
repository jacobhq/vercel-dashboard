import { Page, Tabs, Text } from '@geist-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NavBar from '../components/nav-bar'
import TabBar from '../components/tab-bar'
import styles from '../styles/Home.module.css'

function Home() {
  const router = useRouter()
  return (
    <>
      <NavBar />
    </>
  )
}

export default Home
