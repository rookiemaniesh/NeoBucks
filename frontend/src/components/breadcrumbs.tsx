import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Breadcrumbs = () => {
    return(
        <Breadcrumb >
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink  href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage >Dashboard</BreadcrumbPage>
    </BreadcrumbItem>
   
  </BreadcrumbList>
</Breadcrumb>
    )
}
export default Breadcrumbs;