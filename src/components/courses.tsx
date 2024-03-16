"use client";

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import VerticalLinearStepper from "./Interlist";
import classes from "../lib/classesContent";

export default function Courses() {
  const [subjectOpen, setSubject] = useState(0);
  let nbGrades = classes.length;

  return (
    <MaxWidthWrapper className="flex justify-center mt-4 mb-10">
      {" "}
      <Tabs
        defaultValue={classes[nbGrades - 1].grade}
        className="w-[800px]"
        orientation="horizontal"
      >
        <TabsList className={"grid w-full grid-cols-7"}>
          {classes.map((classe, index) => (
            <TabsTrigger value={classe.grade}>{classe.grade}</TabsTrigger>
          ))}
        </TabsList>
        {classes.map((classe, classesIndex) => (
          <TabsContent value={classe.grade}>
            <Tabs
              defaultValue={classe.matieres[subjectOpen].name}
              className="w-[800px]"
            >
              <TabsList className={"grid w-full grid-cols-3"}>
                {classe.matieres.map((subject, index) => (
                  <TabsTrigger
                    value={subject.name}
                    key={subject.name}
                    onClick={() => setSubject(index)}
                  >
                    {subject.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {classe.matieres.map((subject, index) => (
                <TabsContent value={subject.name}>
                  {subject.name}{" "}
                  <Card>
                    <VerticalLinearStepper
                      color={subject.color}
                      gradeIndex={classesIndex}
                      subjectIndex={index}
                    />
                    {/* <CardHeader>
                      <CardTitle>{subject.name}</CardTitle>
                      <CardDescription>{subject.name}</CardDescription>
                    </CardHeader>

                    <CardFooter>
                      <Button>{subject.name}</Button>
                    </CardFooter> */}
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>
        ))}
      </Tabs>
    </MaxWidthWrapper>
  );
}
