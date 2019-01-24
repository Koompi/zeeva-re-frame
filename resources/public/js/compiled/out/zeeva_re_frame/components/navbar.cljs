(ns zeeva-re-frame.components.navbar)
(defn Navbar
  []
  [:div.container.ui
    [:div {:class "ui secondary  menu"}
        [:img {:src "img/zeeva_Logo.png" :class "imageLogo"}]
        [:a {:class "item right aligned" :href "/"} "Home"]
        [:a {:class "item" :href "#/solutions"} "Solutions"]
        [:a {:class "item" :href "#/about"} "About"]
        [:a {:class "item" :href "#/blog"} "Blog"]
        [:a {:class "item" :href "#/faq"} "FAQ"]]])

