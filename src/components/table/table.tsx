import { ComponentProps } from "react";

interface Table extends ComponentProps<"table"> {

}

export function Table(props: Table) {
    return(
        <div {...props} className="border border-white/10 rounded-lg"
        >
            <table className="w-full" {...props} />
        </div>
    )
}