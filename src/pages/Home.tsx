import { CasinoLayout } from "../layout/CasinoLayout"
import { About, Hero } from "../sections"
import { Annount } from "../sections/Annount"
import { Contact } from "../sections/Contact"
import { Promotion } from "../sections/Promotion"

export const Home = () => {
  return (
   <CasinoLayout >
        <Hero/>
        <About/>
        <Annount/>
        <Promotion/>
        <Contact/>
   </CasinoLayout>
  )
}
