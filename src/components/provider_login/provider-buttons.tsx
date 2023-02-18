import { Button, ButtonGroup } from "@chakra-ui/react";

import React from "react";
import { signInWithGoogle } from "../../firebase/services/user-creation";
import { GoogleIcon } from "./provider-icons";

export default function ProviderButtons() {
  const handleGoogleBtnClick = async () => {
    await signInWithGoogle();
  };
  return (
    <ButtonGroup size={"long"}>
      <Button
        onClick={() => handleGoogleBtnClick()}
        variant={"google"}
        leftIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
    </ButtonGroup>
  );
}
