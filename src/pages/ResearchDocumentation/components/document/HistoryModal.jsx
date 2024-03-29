import BaseButton from "~/components/generic/button/BaseButton";
import BaseModal from "~/components/generic/modal/BaseModal";

import { getProfileFromFullName } from "~/utils/text";

const activity = [
  {
    id: 1,
    person: { name: "Dian Rahmaji", href: "#" },
    version: "2.0.0",
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Perbaikan tata tulis, penambahan saran mengenai aspek pengamanan, fitur dokumen/link eksternal, penjadwalan proyek dan analisis S-curve, menambah implementasi wiki, referensi awal dokumentasi penelitian, evaluasi dokumentasi penelitian danriwayat dokumentasi",
    date: "1h ago",
  },
  {
    id: 2,
    person: { name: "Dzakiy Harissalam", href: "#" },
    version: "1.2.0",
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    comment:
      "Perbaikan pengantar, perbaikan penjelasan analisis dan pemilihan metode, penambahan penjelasan mengenai pengujian Google Lighthouse pada aspek accessibility",
    date: "4d ago",
  },
  // {
  //   id: 3,
  //   person: { name: "Dian Rahmaji", href: "#" },
  //   version: "1.0.0",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  //   comment: "Penyusunan Dokumen C-501",
  //   date: "12d ago",
  // },
];

export default function HistoryModal({
  item,
  onOpenEditModal,
  onOpenInfoModal,
  ...props
}) {
  return (
    <BaseModal title={`Riwayat ${item.name}.${item.extension}`} {...props}>
      <div className="mt-8 flow-root">
        <ul className="-mb-8">
          {activity.map((activityItem) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                <span
                  className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />

                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <div className="my-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <div className=" text-sm text-primary">
                        {getProfileFromFullName(activityItem.person.name)}
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <a
                          href={activityItem.person.href}
                          className="font-medium text-gray-900"
                        >
                          {activityItem.person.name}
                        </a>{" "}
                        memperbarui dokumen ke versi{" "}
                        <a
                          href={activityItem.person.href}
                          className="font-medium text-gray-900"
                        >
                          {activityItem.version}
                        </a>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Memberikan komentar {activityItem.date}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{activityItem.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <li>
            <div className="relative pb-8">
              {/* <span
                className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              /> */}

              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <div className="my-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <div className=" text-sm text-primary">
                      {getProfileFromFullName("Dian Rahmaji")}
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="font-medium text-gray-900">
                        Dian Rahmaji
                      </a>{" "}
                      mengunggah dokumen versi{" "}
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="font-medium text-gray-900">
                        1.0.0
                      </a>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Memberikan komentar 12d ago
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>Penyusunan Dokumen C-501</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="mt-4 flex gap-4">
          <BaseButton
            className="mt-5 inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 shadow-sm focus:outline-none sm:col-start-2 sm:text-sm"
            onClick={onOpenEditModal}
          >
            Perbarui Dokumen
          </BaseButton>
          <BaseButton
            className="mt-5 inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 shadow-sm focus:outline-none sm:col-start-2 sm:text-sm"
            onClick={onOpenInfoModal}
          >
            Lihat Detail
          </BaseButton>
        </div>
      </div>
    </BaseModal>
  );
}
