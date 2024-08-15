package com.slow.groovin;


import com.github.action.test.Printer;
import com.google.common.collect.ImmutableSet;
import java.util.Iterator;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {

        Iterator<String> printer2=(new Printer()).print().iterator();
        Iterable<String> printer = new Printer().print();
        for (String s : printer) {
            System.out.println(s);
        }

    }
}
