(ns zeeva-re-frame.components.navbar)
(defn Navbar
  []
  [:div.container.ui
    [:div {:class "ui secondary  menu"}
        [:img {:src "img/zeeva_Logo.png" :class "imageLogo"}]
        [:a {:class "item" :href "/"} "Home"]
        [:a {:class "item" :href "#/about"} "About"]]])

