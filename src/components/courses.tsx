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
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const classes = [
  "Sixième",
  "Cinquième",
  "Quatrième",
  "Troisième",
  "Seconde",
  "Première",
  "Terminale",
];
const subjects = ["Maths", "Physiques", "informatiques"];

var block = (
  <MaxWidthWrapper className="flex justify-center mt-4 mb-10">
    {" "}
    <Tabs defaultValue={classes[classes.length - 1]} className="w-[800px]">
      <TabsList className={"grid w-full grid-cols-" + classes.length}>
        {classes.map((classe, index) => (
          <TabsTrigger value={classe}>{classe}</TabsTrigger>
        ))}
      </TabsList>
      {classes.map((classe, index) => (
        <TabsContent value={classe}>
          {classe}{" "}
          <Card>
            <CardHeader>
              <CardTitle>{classe}</CardTitle>
              <CardDescription>{classe}</CardDescription>
            </CardHeader>

            <CardFooter>
              <Button>{classe}</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  </MaxWidthWrapper>
);

// TODO : use states to change between parent tabs and child tabs seemlessly (now when I'm in second child tab and click on the first parent tab it changes child tab to first)

export default function Courses() {
  return block;
}
// export default function Courses() {
//   return (
//     <MaxWidthWrapper className="flex justify-center mt-4 mb-10">
//       <Tabs defaultValue="account" className="w-[800px]">
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="account">Account</TabsTrigger>
//           <TabsTrigger value="password">Password</TabsTrigger>
//           <TabsTrigger value="third">third</TabsTrigger>
//         </TabsList>
//         <TabsContent value="account">
//           <Tabs defaultValue="account" className="w-[400px]">
//             <TabsList className="grid w-full grid-cols-2">
//               <TabsTrigger value="account">AAccount</TabsTrigger>
//               <TabsTrigger value="password">APassword</TabsTrigger>
//             </TabsList>
//             <TabsContent value="account">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>AAccount</CardTitle>
//                   <CardDescription>
//                     Make changes to your account here. Click save when you're
//                     done.
//                   </CardDescription>
//                 </CardHeader>

//                 <CardFooter>
//                   <Button>Save changes</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//             <TabsContent value="password">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>APassword</CardTitle>
//                   <CardDescription>
//                     Change your password here. After saving, you'll be logged
//                     out.
//                   </CardDescription>
//                 </CardHeader>

//                 <CardFooter>
//                   <Button>Save password</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </TabsContent>
//         <TabsContent value="password">
//           <Tabs defaultValue="account" className="w-[400px]">
//             <TabsList className="grid w-full grid-cols-2">
//               <TabsTrigger value="account">PAccount</TabsTrigger>
//               <TabsTrigger value="password">PPassword</TabsTrigger>
//             </TabsList>
//             <TabsContent value="account">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>PAccount</CardTitle>
//                   <CardDescription>
//                     Make changes to your account here. Click save when you're
//                     done.
//                   </CardDescription>
//                 </CardHeader>

//                 <CardFooter>
//                   <Button>Save changes</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//             <TabsContent value="password">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>PPassword</CardTitle>
//                   <CardDescription>
//                     Change your password here. After saving, you'll be logged
//                     out.
//                   </CardDescription>
//                 </CardHeader>

//                 <CardFooter>
//                   <Button>Save password</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </TabsContent>
//       </Tabs>
//     </MaxWidthWrapper>
//   );
// }
