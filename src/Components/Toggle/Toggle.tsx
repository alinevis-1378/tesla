import './Toggle.css'

type toggle = {
    isCheked : boolean
    handleChange : () => void
}

export const Toggle = ({handleChange , isCheked} : toggle) => {

  return(
    <div className='toggle-cont'>
    <input type='checkbox' id='chek' className='toggle1' onChange={handleChange} checked={isCheked}/>
    <label htmlFor="chek">darkmode</label>
</div>
  )

}