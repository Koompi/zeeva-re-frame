(ns zeeva-re-frame.components.banner
  (:require [zeeva-re-frame.components.navbar :refer [Navbar]]))

(defn Banner
  []
  [:div.bannerIndex
    (Navbar)])


