(ns zeeva-re-frame.components.navbar
  (:require [reagent.core :as r]))

(def menu (r/atom {:menu false}))

(defn menuToggle
  []
  (swap! menu assoc :menu (not (get-in @menu [:menu]))))

(defn navbarToggle
  []
  
  [:div.ui.vertical.sidebar.menu.left.uncover.animated {:class (if (get-in @menu [:menu]) "slideInLeft visible" "slideOutLeft visible")} 
    [:a {:class "item left aligned" :href "/"} "Home"]
    [:a {:class "item left aligned" :href "#/solutions"} "Solutions"]
    [:a {:class "item left aligned" :href "#/about"} "About"]
    [:a {:class "item left aligned" :href "#/blog"} "Blog"]
    [:a {:class "item left aligned" :href "#/faq"} "FAQ"]])
      
(defn Navbar
  []
  [:div.container.ui
    [:div {:class "ui stackable main menu"}
        [:img {:src "img/zeeva_Logo.png" :class "imageLogo"}]
        [:a {:class "item right aligned" :href "/"} "Home"]
        [:a {:class "item" :href "#/solutions"} "Solutions"]
        [:a {:class "item" :href "#/about"} "About"]
        [:a {:class "item" :href "#/blog"} "Blog"]
        [:a {:class "item" :href "#/faq"} "FAQ"]]
      
    [:div {:class "ui container secondary menu" :onClick #(menuToggle)}  
      [:div {:class "ui text container"}  
        [:img {:src "img/zeeva_Logo.png" :class "imageLogo"}]
        [:a {:class "toc item right aligned"} 
          [:i {:class (if (get-in @menu [:menu]) "close icon" "sidebar icon")}]
          (navbarToggle)]]]])
    
