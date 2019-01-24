(ns zeeva-re-frame.views
  (:require
   [re-frame.core :as re-frame]
   [re-com.core :as re-com]
   [zeeva-re-frame.subs :as subs]
   [zeeva-re-frame.components.navbar :refer [Navbar]]
   [zeeva-re-frame.components.banner :refer [Banner]]
   [zeeva-re-frame.components.content :refer [Blurb]]))
   
;; home

(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [[Banner]
              [Blurb]]])
              
;; about

(defn about-panel []
  [re-com/v-box
   :gap "1em"
   :children [[:h1 "Fuck you"]]])


;; solutions

(defn solutions-panel []
  [re-com/v-box
   :gap "1em"
   :children [[:h1 "Fuck you"]]])


;; solutions

(defn faq-panel []
  [re-com/v-box
   :gap "1em"
   :children [[:h1 "Fuck you"]]])


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :solutions-panel [solutions-panel]
    :about-panel [about-panel]
    :faq-panel [faq-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [re-com/v-box
     :height "100%"
     :children [[panels @active-panel]]]))
