(ns zeeva-re-frame.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [zeeva-re-frame.core-test]))

(doo-tests 'zeeva-re-frame.core-test)
