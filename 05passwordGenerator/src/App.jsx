import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setLNumber] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, genPassword] = useState("")

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?`~"

    for(let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    genPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center pt-10"> //screen
        <div className="flex flex-col items-center"> //container
          <h1 className="text-white text-2xl font-bold mb-6 text-center">Password Generator</h1> //title
          <div className="h-[600px] w-[900px] border-2 border-white rounded-lg bg-white bg-opacity-10 backdrop-blur-md flex flex-col items-center pt-8"> //main content container
            <div className="flex items-center gap-x-2"> 
              <input 
                type="text"
                value={password}
                className="outline-none w-[400px] py-1 px-3 rounded-lg text-black"
                placeholder="Password"
                readOnly
              />
              <button
                onClick={() => {
                  window.navigator.clipboard.writeText(password);
                }}
                className="outline-none bg-blue-700 text-white px-3 py-1 rounded-lg">
                Copy
              </button>
            </div>

            <div>
              <br></br>
              <label className="text-white mt-4">Password Length ({length}) : </label>
              <input 
              type="range"
              min='8'
              max='20'
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
              ></input>
            </div>

            <div className="flex items-center gap-x-8 mt-4">
              <div className="flex items-center gap-x-1">
                <input 
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  onChange={() => setLNumber((prev) => !prev)}
                  className="cursor-pointer"
                />
                <label className="text-white">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  onChange={() => setChar((prev) => !prev)}
                  className="cursor-pointer"
                />
                <label className="text-white">Special Characters</label>
              </div>
            </div>

            <button 
              onClick={generatePassword}
              className="outline-none bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 active:bg-blue-800">
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
