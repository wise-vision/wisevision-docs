import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home() {
    return location.replace('https://wisevision.com.pl');
};

window.onload = function() {
    location.href = "https://wisevision.com.pl";
}