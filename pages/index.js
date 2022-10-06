import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CaseCard from '../components/CaseCard'
import coverGdt from '../public/cover-gdt@2x.png';
import Footer from '../components/Footer';
import { ScrollerMotion } from 'scroller-motion'
import { motion } from "framer-motion";

export default function Home() {


  return (
    <>
    <div className='antialiased font-sans'>
      <Head>
        <title>Charles Design Portfolio</title>
        <meta name="charles design" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <ScrollerMotion>
      <main className="flex flex-col">
     
      <Hero/>
      <div className="grid lg:grid-cols-2 w-full justify-between gap-10 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        >
      <CaseCard image={coverGdt} title='Global Pay' link='/globalpay' tag1='UI&UX Design' tag2='Web Design'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:0.2 }}
        >
      <CaseCard image={coverGdt} title='Global Pay' link='/globalpay' tag1='UI&UX Design' tag2='Web Design'/>
      </motion.div>
 
     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:0 }}
        >
      <CaseCard image={coverGdt} title='Global Pay' link='/globalpay' tag1='UI&UX Design' tag2='Web Design'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:0.2 }}
        >
      <CaseCard image={coverGdt} title='Global Pay' link='/globalpay' tag1='UI&UX Design' tag2='Web Design'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:0 }}
        >
      <CaseCard image={coverGdt} title='Global Pay' link='/globalpay' tag1='UI&UX Design' tag2='Web Design'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:0.2 }}
        >
      <CaseCard image={coverGdt} title='Global Pay' link='/globalpay' tag1='UI&UX Design' tag2='Web Design'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:0 }}
        >
      <CaseCard image={coverGdt} title='Global Pay' link='/globalpay' tag1='UI&UX Design' tag2='Web Design'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:0.2 }}
        >
      <CaseCard image={coverGdt} title='Global Pay' link='/globalpay' tag1='UI&UX Design' tag2='Web Design'/>
      </motion.div>
 
     
      </div>
      </main>

      <Footer />
      </ScrollerMotion>
    </div>
    </>
  )
}
