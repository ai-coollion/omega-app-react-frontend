import { FC, useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export * from './SignIn'
export * from './SignUp'

interface Props {
  signInState: boolean
  onClose: () => void
}

const Auth: FC<Props> = ({ signInState, onClose }) => {
  const [isSignIn, setIsSignIn] = useState<boolean>(signInState)
  const authChange = (currentState: boolean) => {
    setIsSignIn(currentState)
  }

  return (
    <>
      {isSignIn ? (
        <SignIn authChage={authChange} onClose={onClose} />
      ) : (
        <SignUp authChage={authChange} onClose={onClose} />
      )}
    </>
  )
}

export default Auth
