(ns zeeva-re-frame.components.banner
  (:require [zeeva-re-frame.components.navbar :refer [Navbar]]))

(defn Banner
  []
  [:div.bannerIndex
    (Navbar)
    [:div.ui.container
      [:div.indexPadding
        [:h2.indexBanner "Decentralized Platform For Security Token Backed By Real Asset"]
        [:p.descBanner "Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network."]]]])
        

