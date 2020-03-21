import React from 'react'
import ExplanatoryText from './ExplanatoryText'
import BlockHeadSettings from './BlockHeadSettings'
import Settings from './settings'

const BlockElementSettings = ({ cShift, 
                                caesarPlusMinus,
                                skytalePlusMinus,
                                alphabet, 
                                alphabetUpdate, 
                                selectCase, 
                                includeChars, 
                                switchModal, 
                                method, 
                                methodNameInset, 
                                changeDirection, 
                                direction,
                                setAlpha,
                                setBeta,
                                updateKeyword,
                                keyword,
                                playSquare,
                                setReplaceLetters,
                                toReplaceLetter,
                                replaceLetter,
                                ringLength,
                                skytaleLength,
                                skytaleProjectedValue,
                                alphabetActive,
                                updateOtpKey,
                                genRandomKey,
                                otpKey,
                                inputValue,
                                setPrimeOne,
                                setPrimeTwo,
                                setE,
                                e,
                                prime_one,
                                prime_two,
                                phi,
                                n,
                                d,
                                timeToCalculate
                                }) => {
  return (
    <div className="block_settings">
      <BlockHeadSettings 
        switchModal={switchModal} 
        methodNameInset={methodNameInset}
        changeDirection={changeDirection}
      />
      <div className="block_body">
          <div className="block_body_input">
              <Settings 
                alphabetActive = {alphabetActive}
                direction={direction}
                cShift={cShift}
                alphabet={alphabet}
                alphabetUpdate={alphabetUpdate}
                selectCase={selectCase}
                includeChars={includeChars}
                method={method}
                setAlpha={setAlpha}
                setBeta={setBeta}
                updateKeyword={updateKeyword}
                keyword={keyword}
                playSquare = {playSquare}
                setReplaceLetters = {setReplaceLetters}
                toReplaceLetter = {toReplaceLetter}
                replaceLetter = {replaceLetter}
                ringLength = {ringLength}
                skytaleLength = {skytaleLength}
                skytaleProjectedValue = {skytaleProjectedValue}
                updateOtpKey = {updateOtpKey}
                inputValue = {inputValue}
                genRandomKey = {genRandomKey}
                otpKey = {otpKey}
                setPrimeOne = {setPrimeOne}
                setPrimeTwo = {setPrimeTwo}
                setE = {setE}
                e = {e}
                prime_one = {prime_one}
                prime_two = {prime_two}
                phi = {phi}
                n = {n}
                d = {d}
                timeToCalculate = {timeToCalculate}
                caesarPlusMinus = {caesarPlusMinus}
                skytalePlusMinus = {skytalePlusMinus}
              />
              
              <ExplanatoryText 
                direction={direction}
                method={method}
              />
          </div>
      </div>
    </div>
  )
}

export default BlockElementSettings
