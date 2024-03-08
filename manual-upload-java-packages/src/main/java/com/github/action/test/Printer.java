package com.github.action.test;

import com.google.common.base.Splitter;

public class Printer {
    public Iterable<String> print() {
        return Splitter.on(',')
                .trimResults()
                .omitEmptyStrings()
                .split("1,2,3,4, 5,6,7,8,9,10");
    }
}
