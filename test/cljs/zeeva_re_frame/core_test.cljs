(ns zeeva-re-frame.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [zeeva-re-frame.core :as core]))

(deftest fake-test
  (testing "fake description"
    (is (= 1 2))))
