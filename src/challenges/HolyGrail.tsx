import { FC } from 'react'
interface HolyGrailProps {
  
}
const HolyGrail: FC<HolyGrailProps> = ({
  
}) => {
  return (
    <>
            <header>Header</header>
      <div className='columns'>
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  )
}

export default HolyGrail