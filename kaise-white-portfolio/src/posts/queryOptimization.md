---
key: "3"
title: "Query Optimization"
date: "June 10, 2020"
description: "Performance Tuning & Query Optimization"
readTime: "5 minute read"
coverPhotoURL: "https://www.gatsbyjs.org/monogram.svg"
tags: ["sql", "microsoft", "mssql"]
banner: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png"
---

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
<img src="https://img.icons8.com/color/48/000000/microsoft.png"/>  </a>
</p>
<h3 align="center">
 Performance Tuning & Query Optimization
</h3>

SQL performance tuning can be an incredibly difficult task, particularly when working with large-scale data where even the most minor change can have a dramatic (positive or negative) impact on performance. Here are a few basic steps I start with and things that I look for when tuning queries.

## Steps to optimize a query

1.  **Generate an execution plan.**

    This is how SQL server breaks down the query.

    The **query optimzier** is what the SQL engine uses in order to choose the best execution plan for a particular query and it generates the execution plan by using **statistics**

    SQL Server **statistics** are essential for the query optimizer to prepare an optimized and cost-effective execution plan. It's basically data about your data.

2.  **Check to see if the statement performed a scan or a seek.**

    A seek uses the index to pinpoint the records that are needed to satisfy the query. A scan traverses through all the data or index pages in order to find the appropriate records.

    If you seen a table scan then you want to see why an index has no been used.

    Here are a few reasons why an index would be surpressed:

    - Arithmetic operation on an index column.
    - Concatenation on an index column.
    - Comparing a character indexed column with a numeric value.

3.  **Look for sorting operations**

    Sorting is an expensive task. If you see a sort operation in your **execution plan** this usuaully means that the column its sorting on doesn't have a **clustered index**.

    - Ex: Sorting has a cost of 82%, we can solve this by creating a clustered index on that column.

4.  **Pay attention to join Operators**

    Here are a few joins to pay attention to:

    **Nested Loop Join**:

    - Gets a row from the outer table and searches for that row in the inner table. This means that the smaller (outer) table does not have an index for the column being used in the where clause but the bigger table does have an index.


    **Hash Join**

    - Combines two tables that are not sorted nor have indexes.
    - Show you immediately that both tables don’t have a clustered index.

    **Merge Join**
    - Performs better because both columns are already sorted

<!-- AUTO-GENERATED-CONTENT:END -->
