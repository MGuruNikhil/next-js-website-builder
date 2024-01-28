import React from 'react'

const Toolbar = () => {
  return (

<div className="bg-red-300 grow-[1] p-5 flex flex-col gap-2">
<div id="text-block" className="bg-black text-white text-center py-2 codeblock" draggable="true">text</div>
<div id="img-block" className="bg-green-300 text-black text-center py-2 codeblock" draggable="true">image</div>
</div>
  )}

  export default Toolbar
