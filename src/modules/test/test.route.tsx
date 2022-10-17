import React from "react";
import i18n from "i18next";
import { FaStar } from "react-icons/fa";
import { IDynamicRoute } from "@components/DynamicNav/DynamicNav.model";

const TestModuleRoutes: IDynamicRoute[] = [
  {
    path: "/test",
    name: i18n.t("Test"),
    icon: <FaStar />,
    component: React.lazy(() => import("modules/test/views/TestView"))
  }
];

export default TestModuleRoutes;
