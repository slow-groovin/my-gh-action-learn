package com.slow.groovin;


import com.github.action.test.Printer;
import com.google.common.collect.ImmutableSet;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {

        Iterable<String> printer = new Printer().print();
        for (String s : printer) {
            System.out.println(s);
        }

    }
}
