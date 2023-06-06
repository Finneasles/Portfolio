import { useTranslation } from "react-i18next";
import React from "react";
import { Button, SignInModalComponent } from "@/components";
import { FaUser } from "react-icons/fa";

export const Component = ({ state }) => {
  const { t } = useTranslation();
  return (
    <SignInModalComponent state={state}>
    <Button
      className={"h-full bg-white px-4 text-[0056BD] text-opacity-70"}
      href="/"
      onClick={(e) => {
        state.setModal(!state.modal);
        e.preventDefault();
      }}
      ariaLabel={t("signIn_label")}
      icon={<FaUser />}
      variant={"secondary"}
    />
  </SignInModalComponent>
  );
};

export default Component;
