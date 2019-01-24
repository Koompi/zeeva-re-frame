(ns zeeva-re-frame.components.navbar
  (:require [reagent.core :as r]))

(def menu (r/atom {:menu false}))

(defn menuToggle
  []
  (swap! menu assoc :menu (not (get-in @menu [:menu]))))

(defn menuNavbar
  [animation]
  [:div.ui.vertical.sidebar.menu.left.uncover.visible.animated {:class animation} 
    [:a {:href "#lasociete", :class "item"} "La société"] 
    [:a {:href "#expertises", :class "item"} "Nos expertises"] 
    [:div {:class "ui simple dropdown item"} "Réalisations"
      [:i {:class "dropdown icon"}] 
      [:div {:class "menu"}] 
      [:a {:href "#exemple1", :class "item"} "Exemple 1"] 
      [:a {:href "#exemple2", :class "item"} "Exemple 2"] 
      [:a {:href "#exemple3", :class "item"} "Exemple 3"]] 
    [:a {:href "#contact", :class "item"} "Contact"]])


(defn navbarToggle
  []
  (if (get-in @menu [:menu])
    (menuNavbar "slideInLeft")))
      
        
        

    
        

  ; [:div {:class "ui vertical sidebar menu left uncover visible"} 
  ; [:a {:href "#lasociete", :class "item"} "La société"] 
  ; [:a {:href "#expertises", :class "item"} "Nos expertises"] 
  ; [:div {:class "ui simple dropdown item"} "Réalisations"
  ;   [:i {:class "dropdown icon"}] 
  ;   [:div {:class "menu"}] 
  ;   [:a {:href "#exemple1", :class "item"} "Exemple 1"] 
  ;   [:a {:href "#exemple2", :class "item"} "Exemple 2"] 
  ;   [:a {:href "#exemple3", :class "item"} "Exemple 3"]] 
  ; [:a {:href "#contact", :class "item"} "Contact"]]
; (if (get-in menuToggle (asocc @menuToggle [:menu true])) (.log js/console "False") (.log js/console "True"))

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
      
    [:div {:class "ui container fixed secondary menu" :onClick #(menuToggle)}  
      [:div {:class "ui text container"}  
        [:a {:class "toc item right aligned"} 
          [:i {:class (if (get-in @menu [:menu]) "close icon" "sidebar icon")}]
          (navbarToggle)]]]])
    
