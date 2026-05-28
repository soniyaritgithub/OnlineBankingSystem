import { motion } from "framer-motion";
import AuroraBackground from "../components/AuroraBackground";



const Terms = () => {

const cards = [

"Account Rules",
"User Policies",
"Loan Terms",
"Payment Policies"

];

return (

<div className="
relative
min-h-screen
overflow-hidden
bg-gradient-to-br
from-slate-900
via-blue-950
to-cyan-950
text-white
px-4
md:px-10
py-16
">

<AuroraBackground />

<motion.h1

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

className="
text-3xl
sm:text-4xl
md:text-6xl
lg:text-7xl
font-black
text-center
"
>

Terms & Conditions

</motion.h1>

<img

src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200"

className="
w-full
max-w-5xl
mx-auto
rounded-3xl
mt-10
"
/>

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-8
mt-20
">

{cards.map((item,index)=>(

<motion.div

key={index}

whileHover={{
y:-10
}}

className="
bg-white/10
rounded-3xl
p-8
backdrop-blur-xl
"
>

<h2 className="text-2xl font-bold">

{item}

</h2>

<p className="mt-4 text-slate-300">

SmartBank banking terms and policies.

</p>

</motion.div>

))}

</div>

</div>

);

};

export default Terms;