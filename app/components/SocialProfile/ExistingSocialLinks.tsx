
const people = [
  {
    name: 'Facebook',
    email: 'calvin.hawkinsfdhfdhgfh@example.com',
    image:
      'https://s3-alpha-sig.figma.com/img/74b9/cfa7/478547b3261209138fbff9b36d4a5c9e?Expires=1659916800&Signature=FI7Shs4EXNcW303HInrQkdnt6o7TLBhq9i0xdXkLuMQWYeTJrqNPCJFBv3y~uR87fXFyDDYDmhWTXexavMmeSv9K0SuN85Tdxcc08NFClsN91M~aZxl8O9kkId3m6d10N7qtCaYmYHHDcHitP0nymp2q7nndm1Y4WzQHvyboiXTGJlI8t4PRzggHF6e03uy~w5om7deYW59GPlO-DVhbRd7eFOFe1mHafRaerMvyZC4rF~0P~3p5zpdzQOZPljlSALg5C44P6NAndycsv9kD65OayT5OYQl4ISSs-gmIfjaFv5noUZ0Klil3x7iQ35p87or~PE5shcja04rfIfWSoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    name: 'Twitter',
    email: 'kristen.ramos@example.com',
    image:
      'https://s3-alpha-sig.figma.com/img/4632/8a79/365acf1c08e1b6f6f590603f01e05730?Expires=1659916800&Signature=C96HZjC8nMUVFeF2XO1wqmm9E1VHN3F-oKDBo-GdQAd5LF9F6o4rbWzBbGr6KFqH6FzIXq-BD~WeODB65kcxrt-rEMFWx-PjkfgRERlIKnMSmfTTW7S8u8DmbGRxU9W4~c~6kxw4VhQqRBHAWaE-fT0w5741ZYkZPa1QUZdIGmJg~p9hBIZns34CxDU0ugw2WjA0NP1ab9CRaNbIbu2rpqQqOrOTyJooekOdKGc~8Sy-zTSz3nP~-U6UeHprWEWpLEE3fm33eUZPIaifROBVSrxPqa1IffAdmxU7qJgVVX8OrL8rrAINe4iI5urVW1XffrFwIuvZKCwFiKA4k93Qmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    name: 'Youtube',
    email: 'ted.fox@example.com',
    image:
      'https://s3-alpha-sig.figma.com/img/52f4/cbf3/13e211511dc02494e8b8b67813879334?Expires=1659916800&Signature=LxM~cp-du4l60GFrOAAhtd2z9k1jc~UGZSPC3n0wOAeqnH7OPuZZjpbm-CKGYfkmNFfkkPpO2UPA39vN7MbrvcNFC5n~edmhIUgjzNYMntG1TfZNHNOnHLmxZ4hlfCCr3I9-RbgL~DnVFj92QB23i5UzPDqvNTQVYfTUHXMIdpTIIaZenrQqSfbT9wljOgBWYHYmg693GbN7Nmx7m0D21QvGjuc8TaXsDgngsjbCBE7yyjEiq-8UBFLGhnavDLCrEqV9lYghyK2Z~ljW6O7Xlkhvc1i3i3KR5Xqd0D2UE-xA9F7QfESCQ2sdJIgK96oDfvXOwaA~aVdOUJNmBdM5ew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
]

export default function AddSocialLinks() {
  return (
    <div className="pl-5 pr-6">
      <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
      {people.map((person) => (
        <li key={person.email} className="">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="py-4 flex">
              <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="w-52 text-sm text-gray-500 text-ellipsis overflow-hidden">{person.email}</p>
              </div>
            </div>
          
            <div className="flex flex-row ml-[3.2rem] lg:ml-0 lg:flex-col items-start py-0 lg:py-4 mb-2 lg:mb-0 text-gray-400">
              <button>
                Edit
              </button>
              <button className="ml-3 lg:ml-0">
                Delete
              </button>
            </div>
          </div>
          
        </li>
      ))} 
    </ul>
    </div>
    
  )
}
