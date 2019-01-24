(ns zeeva-re-frame.components.content)


(defn footer-panel []
    [:center
        [:h3.follow "Follow us on"]
        [:div.widthFooter
            [:div {:class "ui three column grid"}
                [:div.column
                    [:a {:href "#"}
                        [:img {:class "ui small image" :src "/img/socialMedia/telegram.svg"}]]]
                [:div.column
                    [:a {:href "#"}
                        [:img {:class "ui small image" :src "/img/socialMedia/medium.svg"}]]]
                [:div.column
                    [:a {:href "#"}
                        [:img {:class "ui small image" :src "/img/socialMedia/github-logo.svg"}]]]]]])

(defn section1
    [img title desc]
    [:div {:class "column"}
        [:img {:class "ui medium image" :src img}]
        [:h3.contentTitle title]
        [:p.paraphaDesc desc]])

(defn column
  [desc]
  [:div {:class "column"}
      [:p desc]])

(defn Blurb
    []
    [:div
      [:div.ui.container
          [:div.BlurbPadding
              [:center
                  [:div {:class "ui stackable three column grid"}
                    (section1 "img/blur_1.png" "Smart Contract" "Tokenize business by issuing security tokens on our platform and enable fundraising")
                    (section1 "img/blur_2.png" "Decentralized Trading Platform" "Decentralized stock exchange platform for startups and small medium enterprise business")
                    (section1 "img/blur_3.png" "Low-Cost Trading Channel" "Trade security tokens quickly and safely on the low-cost decentralized exchange")]]]
          [:center
              [:h1.HowItWorks "How it Works"]]]

      [:img {:src "/img/zeeva-infographic.svg" :class "ui fluid image"}]

      ; Section 3
      [:div.sectionBackground
        [:div.container.ui
          [:h4.aboutZeeva "About" [:span [:img.aboutLogo {:src "img/zeeva_Logo.png"}]]]
          [:div {:class "ui stackable two column grid"}
              (column "Zeeva is a Platform of security token issuance company base on decentralization technology and power by smart contract.")
              [:div
                (column "")]]

          [:div {:class "ui stackable three column grid"}
              [:div {:class "column"}
                  [:h4.aboutTitle "Vision"]
                  (column "The trusted security token issuing company that secure buy real vaulable asset and fiat currency with special formulation and auditable feature included.")]
              [:div {:class "column"}
                  [:h4.aboutTitle "Mission"]
                  (column "A gateway to any startups raising and door to any investor who support the startup idea with borderless investment accepted.")]
              [:div {:class "column"}]]]]

      [:div.ui.container {:id "faq"}
         [:h3.FAQ "FAQ"]  
        [:div {:class "ui fluid accordion accordionPadding"}
         [:div {:class "active title"}
          [:i {:class "dropdown icon"}]"What is a dog?"]
         [:div {:class "active content"}
          [:p "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."]]
         [:div {:class "title"}
          [:i {:class "dropdown icon"}]"What kinds of dogs are there?"]
         [:div {:class "content"}
          [:p "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."]]
         [:div {:class "title"}
          [:i {:class "dropdown icon"}]"How do you acquire a dog?"]
         [:div {:class "content"}
          [:p "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters."]
          [:p "A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."]]]
        (footer-panel)]])
