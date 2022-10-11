function TextComp({text, font_weight = 200, font_size = '12px', font_color = 'black', mx = 0}) {
  return (
    <div style={{color:font_color, fontSize: font_size, fontWeight: font_weight, marginLeft: mx, marginRight: mx }}>{text}</div>
  )
}

export default TextComp